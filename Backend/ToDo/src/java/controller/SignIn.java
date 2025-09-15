package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hibernate.HibernateUtil;
import hibernate.User;
import model.Util;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "SignIn", urlPatterns = {"/SignIn"})
public class SignIn extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Gson gson = new Gson();
        JsonObject reqJson = gson.fromJson(request.getReader(), JsonObject.class);
        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("status", false);

        String email = reqJson.get("email").getAsString();
        String password = reqJson.get("password").getAsString();

        if (email.isEmpty() || password.isEmpty()) {
            responseObject.addProperty("message", "Email and password required");
        } else if (!Util.isEmailValid(email)) {
            responseObject.addProperty("message", "Invalid email format");
        } else {
            Session session = HibernateUtil.getSessionFactory().openSession();
            Criteria criteria = session.createCriteria(User.class);
            criteria.add(Restrictions.eq("email", email));
            criteria.add(Restrictions.eq("password", password));
            User user = (User) criteria.uniqueResult();
            session.close();

            if (user != null) {
                user.setPassword(""); 
                responseObject.addProperty("status", true);
                responseObject.add("user", gson.toJsonTree(user));
            } else {
                responseObject.addProperty("message", "Invalid credentials");
            }
        }

        response.setContentType("application/json");
        response.getWriter().write(gson.toJson(responseObject));
    }
}
