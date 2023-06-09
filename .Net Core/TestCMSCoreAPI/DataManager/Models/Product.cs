﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataManager.Models
{
    [Table("products")]
    public class Product
    {
        [Key]
        public Guid ID { get; set; }
        public string ProductNo { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public Boolean Deleted { get; set; }
        public string CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Nullable<DateTime> DateModified { get; set; }

        public ICollection<TransactionDetails> TransactionDetails { get; set; }
    }
}
