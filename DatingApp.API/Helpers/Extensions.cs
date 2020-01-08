namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this Microsoft.AspNetCore.Http.HttpResponse respones, string messege)
        {
            respones.Headers.Add("Application-Error", messege);
            respones.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            respones.Headers.Add("Access-Control-Allow-Origin", "*");
        }

    }
}