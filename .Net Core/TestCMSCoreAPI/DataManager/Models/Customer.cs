using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataManager.Models
{
    [Table("customers")]
    public class Customer
    {
        [Key]
        public Guid ID { get; set; }
        public string CustomerID { get; set; }
        public string FullName { get; set; }
        public string IDType { get; set; }
        public string IDNo { get; set; }
        public Boolean Deleted { get; set; }
        public string CreatedBy { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Nullable<DateTime> DateModified { get; set; }

        public ICollection<Transaction> Transactions { get; set; }
    }
}
