using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend2.Migrations
{
    /// <inheritdoc />
    public partial class NewModalField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "AllExpenses",
                table: "Finances",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Expenses",
                table: "Finances",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Income",
                table: "Finances",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "LeftToSpend",
                table: "Finances",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AllExpenses",
                table: "Finances");

            migrationBuilder.DropColumn(
                name: "Expenses",
                table: "Finances");

            migrationBuilder.DropColumn(
                name: "Income",
                table: "Finances");

            migrationBuilder.DropColumn(
                name: "LeftToSpend",
                table: "Finances");
        }
    }
}
