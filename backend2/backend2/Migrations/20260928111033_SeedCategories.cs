using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend2.Migrations
{
    /// <inheritdoc />
    public partial class SeedCategories : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Finances_Category_CategoryId",
                table: "Finances");

            migrationBuilder.DropIndex(
                name: "IX_Finances_CategoryId",
                table: "Finances");

            migrationBuilder.AlterColumn<string>(
                name: "Date",
                table: "Finances",
                type: "text",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "timestamp with time zone");

            migrationBuilder.AlterColumn<string>(
                name: "CategoryId",
                table: "Finances",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId1",
                table: "Finances",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "Category",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "groceries" },
                    { 2, "dining" },
                    { 3, "transport" },
                    { 4, "fun" },
                    { 5, "home" },
                    { 6, "health" },
                    { 7, "other" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Finances_CategoryId1",
                table: "Finances",
                column: "CategoryId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Finances_Category_CategoryId1",
                table: "Finances",
                column: "CategoryId1",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Finances_Category_CategoryId1",
                table: "Finances");

            migrationBuilder.DropIndex(
                name: "IX_Finances_CategoryId1",
                table: "Finances");

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Category",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DropColumn(
                name: "CategoryId1",
                table: "Finances");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Finances",
                type: "timestamp with time zone",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Finances",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.CreateIndex(
                name: "IX_Finances_CategoryId",
                table: "Finances",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Finances_Category_CategoryId",
                table: "Finances",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
