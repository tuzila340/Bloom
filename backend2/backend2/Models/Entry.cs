using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public enum EntryType
{
    Expense,
    Income
}

public enum RepeatFrequency
{
    Never,
    Weekly,
    Monthly
}

/// <summary>
/// A single expense or income record created from AddEntryDialog.
/// </summary>
public class Entry
{
    public int Id { get; set; }

    [Range(typeof(decimal), "0.01", "9999999999999999.99")]
    public decimal Amount { get; set; }

    [Required, MaxLength(200)]
    public string Description { get; set; } = string.Empty;

    public DateOnly Date { get; set; }

    public EntryType Type { get; set; }

    // Income entries do not require a spending category.
    public int? CategoryId { get; set; }
    public Category? Category { get; set; }

    public RepeatFrequency Repeat { get; set; }

    [Required]
    public string UserId { get; set; } = string.Empty;
    public User User { get; set; } = null!;
}
