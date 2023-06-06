import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      secret: process.env.JWT_SECRET,
      pages: {
        signIn: '/login',
      },
      async authorize(credentials, req) {
        const JSONdata = JSON.stringify(credentials);
        const endpoint = "https://chatraschool.vistamatrix.com/api/login";
        const options = {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const user = await response.json();
      

        if (user.status == true && user) {
  
          return user
        } else {
          return null;
        }
      }
    }),
    ],
      callbacks: {
        async jwt({ token, user,account  }) {
          if (account && user) {

            return {
              ...token,
              accessToken: user.access_token,
              name:user.data.name,
              email:user.data.email,
              accessToken : user.access_token,
              picture : "",
              sub : "",
            };
            
          }
          return token;
         
        },
        async session({ session, token }) {
          session.user.accessToken = token.accessToken;
            
          return session;
        },
        debug: process.env.NODE_ENV === 'development',
        
        
      },
};
export default NextAuth(authOptions);
