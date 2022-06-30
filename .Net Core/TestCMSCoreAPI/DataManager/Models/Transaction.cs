using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataManager.Models
{
    [Table("transaction")]
    public class Transaction
    {
        [Key]
        public Guid ID { get; set; }
        public string TransactionNo { get; set; }
        public Guid CustomerID { get; set; }
        public decimal TotalPrice { get; set; }
        public Boolean Deleted { get; set; }
        public string CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Nullable<DateTime> DateModified { get; set; }

        public Customer Customer { get; set; }
        public ICollection<TransactionDetails> TransactionDetails { get; set; }
    }
}
