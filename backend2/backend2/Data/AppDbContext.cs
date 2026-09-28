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
    }
}
