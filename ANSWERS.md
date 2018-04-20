<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    *Middleware functions are functions that have access to the request and response objects and the next middleware function in the application's request-response cycle.  
    *A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  
    *bcryt is a hashing function.   
    *JWT(Json Web Tokens) are an open, industry standard method for representing claims securely between two parties. 

2.  What does bcrypt do in order to prevent attacks?
    #Bcrypt has three paramaters it uses to has a password
    *Salt
    *Password
    *Cost
    
    It derives a key using the salt, password, and cost to encrypt the well known text "OrpheanBeholderScryDoubt" and not the password itself. So verification would be performing the encryption again on this string and see if the ciphertext is the same. The salt prevents scenarios where two users would use the same password to show up as the same ciphertext. So if you don't have the password you can't generate the ciphertext.

3.  What are the three parts of the JSON Web Token?
    *Header
    *Payload
    *Signature
