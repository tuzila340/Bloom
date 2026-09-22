namespace backend.Models;

public class Finance
{
    public int Id { get; set; }
    public string Title { get; set; }

    // ID выбранной категории (сохраняется в базе)
    public int CategoryId { get; set; }
    
    // Навигационное свойство, чтобы Entity Framework подтягивал объект категории
    public Category Category { get; set; } = null!;

    public DateTime Date { get; set; }
    public float Amount { get; set; }
    
    public required string UserId { get; set; }
    public User User { get; set; } = null!;
}