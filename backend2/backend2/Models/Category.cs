namespace backend.Models;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty; // Название, например: "Еда", "Транспорт"
    
    public List<Finance> Finances { get; set; } = new();
}