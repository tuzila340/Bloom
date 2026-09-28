using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace backend.Data;

public class AppDbContext : IdentityDbContext<User>
{
    public DbSet<Finance> Finances { get; set; }
    public DbSet<Entry> Entries { get; set; }

    public  AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {}

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Entry>(entry =>
        {
            entry.Property(e => e.Amount).HasPrecision(18, 2);
            entry.Property(e => e.Description).HasMaxLength(200);

            entry.HasOne(e => e.Category)
                .WithMany(c => c.Entries)
                .HasForeignKey(e => e.CategoryId)
                .IsRequired(false);

            entry.HasOne(e => e.User)
                .WithMany()
                .HasForeignKey(e => e.UserId)
                .IsRequired();
        });
        builder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "groceries" },
            new Category { Id = 2, Name = "dining" },
            new Category { Id = 3, Name = "transport" },
            new Category { Id = 4, Name = "fun" },
            new Category { Id = 5, Name = "home" },
            new Category { Id = 6, Name = "health" },
            new Category { Id = 7, Name = "other" }
        );
    }
}
