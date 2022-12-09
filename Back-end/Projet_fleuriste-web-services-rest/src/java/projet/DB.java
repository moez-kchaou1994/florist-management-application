/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package projet;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author computer
 */
public class DB {
    private static final List<Fleure> fleure=new ArrayList();
    private static final List<Bouquet>  bouquet=new ArrayList();
    private static final List<Fleuriste>  fleuriste=new ArrayList();
    private static final List<Client>  client=new ArrayList();
   private static final List<Commande>  commande=new ArrayList();
    
     
    static{
        
         fleure.add(new Fleure(0,"Rouge","Dressée","rose",5.3));
         fleure.add(new Fleure(1,"Jaune","Montante","tulipe",6.3));
         fleure.add(new Fleure(2,"Blanche","Volubile","iris",4.3));
         //
         bouquet.add(new Bouquet(0,"flou","b1",20.01));
         bouquet.add(new Bouquet(1,"rond","b2",25.2));
         bouquet.add(new Bouquet(2,"linéaire","b3",45.2));
         //
          fleuriste.add(new Fleuriste(1,"moez1","moez","moez"));
          fleuriste.add(new Fleuriste(2,"ahmed1","ahmed","ahmed"));
          client.add(new Client(0,"ali","ali1"));
         
    }
    public static List<Fleuriste> getlistfleuriste(){
        return fleuriste;
    }
     public static List<Client> getlistclient(){
        return client;
    }
      public static List<Fleure> getlistfleure(){
        return fleure;
    }
        public static List<Bouquet> getlistbouquet(){
        return bouquet;
    }
        public static List<Commande> getlistcommande(){
        return commande;
    }
    
}
