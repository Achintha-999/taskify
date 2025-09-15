package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.HibernateUtil;
import hibernate.User;
import model.Util;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@WebServlet(name = "SignUp", urlPatterns = {"/SignUp"})
public class SignUp extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Gson gson = new Gson();
        JsonObject responseObject = gson.fromJson(request.getReader(), JsonObject.class);

        responseObject.addProperty("status", false);

        String fullName = responseObject.get("fullName").getAsString();
        String username = responseObject.get("username").getAsString();
        String email = responseObject.get("email").getAsString();
        String password = responseObject.get("password").getAsString();
        String confirmPassword = responseObject.get("confirmpassword").getAsString();

        if (fullName.isEmpty() || username.isEmpty() || email.isEmpty() || password.isEmpty() || confirmPassword.isEmpty()) {
            responseObject.addProperty("message", "All fields are required");
        } else if (!Util.isEmailValid(email)) {
            responseObject.addProperty("message", "Invalid email format");
        } else if (!Util.isPasswordValid(password)) {
            responseObject.addProperty("message", "The password must contains at least uppercase, lowercase,"
                    + " number, special characters and to be minimum eight characters long!");
        } else if (!password.equals(confirmPassword)) {
            responseObject.addProperty("message", "Password didn't match");
        } else {
            Session session = HibernateUtil.getSessionFactory().openSession();
            Transaction tx = session.beginTransaction();
            session.save(new User(fullName, username, email, password, new Date()));
            tx.commit();
            session.close();

            responseObject.addProperty("status", true);
            responseObject.addProperty("message", "User registered successfully");
        }

        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseObject));
    }
}
