using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace backend.Data;

public class AppDbContext : IdentityDbContext<User>
{
    public DbSet<Finance> Finances { get; set; }
    public  AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {}
}