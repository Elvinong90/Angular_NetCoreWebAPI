using System.ComponentModel.DataAnnotations;

namespace DataManager.Models
{
    public class Transaction
    {
        [Key]
        public Guid ID { get; set; }
        public string TransactionNo { get; set; }
        public Guid CustomerID { get; set; }
        public Guid ProductID { get; set; }
        public Boolean Deleted { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public Nullable<DateTime> DateModified { get; set; }
    }
}
