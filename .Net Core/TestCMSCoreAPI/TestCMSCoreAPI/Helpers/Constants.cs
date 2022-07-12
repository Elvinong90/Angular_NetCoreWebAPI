namespace TestCMSCoreAPI.Helpers
{
    public class Constants
    {
        public class Message
        {
            private const string _obj = "The record";

            public const string msgCreateOK = _obj + " is created successfully";
            public const string msgCreateNotOK = _obj + " is failed to create";
            public const string msgUpdateOK = _obj + " is updated successfully";
            public const string msgUpdateNotOK = _obj + " is failed to update";
            public const string msgDeleteOK = _obj + " is deleted successfully";
            public const string msgDeleteNotOK = _obj + " is failed to delete";
            public const string msgIsExist = _obj + " is existed";
            public const string msgInUsed = _obj + " is in used";

            public string overrideObject(string inObject, string outMessage) {
                return outMessage.Replace(_obj, inObject);
            }
        }
    }
}
