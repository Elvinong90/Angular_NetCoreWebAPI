using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataManager.Models
{
    [Table("transactiondetails")]
    public  class TransactionDetails
    {
        [Key]
        public Guid ID { get; set; }
        public Guid TransactionID { get; set; }
        public Guid ProductID { get; set; }
        public decimal Price { get; set; }
        public Boolean Deleted { get; set; }
        public string CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Nullable<DateTime> DateModified { get; set; }

        public Transaction Transaction { get; set; }
        public Product Product { get; set; }
    }
}
