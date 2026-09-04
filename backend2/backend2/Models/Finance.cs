namespace backend.Models;

public class Finance
{
    public int Id { get; set; }
    
    public float Amount { get; set; }
    
    public required string UserId { get; set; }
    public User User { get; set; } = null!;
}