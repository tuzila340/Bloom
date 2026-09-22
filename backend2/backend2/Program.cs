using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
    
builder.Services.AddIdentity<User, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseCors("frontend");
app.UseAuthentication();
app.UseAuthorization();

app.MapPost("/register", async (
    [FromBody] RegisterDto dto,
    [FromServices] UserManager<User> userManager) =>
{
    // Отклоняем неполные запросы регистрации до создания пользователя Identity.

    if (string.IsNullOrEmpty(dto.username))
    {
        return Results.BadRequest("Username is required");
    }

    var user = new User
    {
        UserName = dto.username,
        Email = dto.email
    };

    var result = await userManager.CreateAsync(user, dto.password);

    if (result.Succeeded)
    {
        return Results.Ok(new { message = "Registered successfully" });
    }

    return Results.BadRequest(result.Errors);
});

app.MapPost("/login", async (
    [FromBody] LoginDto dto,
    [FromServices] SignInManager<User> signInManager) =>
{
    // Постоянная cookie сохраняет вход в SPA между перезагрузками страницы.
    var result = await signInManager.PasswordSignInAsync(
        dto.username, dto.password, isPersistent: true, lockoutOnFailure: false);

    if (result.Succeeded)
        return Results.Ok("Logged in successfully");
    
    if (result.RequiresTwoFactor)
        return Results.Ok(new { requiresTwoFactor = true });

    return Results.Unauthorized();
});

app.Map("/user-profil-data", async (HttpContext http, [FromServices] UserManager<User> userManager) =>
{
    var user = await userManager.GetUserAsync(http.User);
    if (user == null) return Results.Unauthorized();
    
    return Results.Ok(new { 
        id = user.Id, 
        email = user.Email, 
        username = user.UserName 
    });
}).RequireAuthorization();



app.Run();

public record RegisterDto(string username, string email, string password);
public record LoginDto(string username, string password);