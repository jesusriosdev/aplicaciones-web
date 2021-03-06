using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestApp.Library.DAL.Models;

namespace TestApp.Library.BLL
{
    public class Session
    {
        public static async Task<Tuple<Users, string>> ValidateCredentials(TestAppEntities ctx, string email, string password)
        {
            string message = String.Empty;
            var user = await Users.GetItem(ctx, email);
            if (user != null)
            {
                if(user.password == password)
                {
                    if (user.is_active == true)
                    {

                    }
                    else
                        message = "User inactive.";
                }
                else
                    message = "Email or password incorrect.";
            }
            else
                message = "Email or password incorrect.";


            return Tuple.Create(user, message);
        }
    }
}
