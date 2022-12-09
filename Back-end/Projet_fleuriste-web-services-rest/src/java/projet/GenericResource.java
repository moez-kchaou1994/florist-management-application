/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package projet;

import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import org.omg.CORBA.BAD_CONTEXT;

/**
 * REST Web Service
 *
 * @author computer
 */
@Path("generic")
public class GenericResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {
    }

    /**
     * Retrieves representation of an instance of projet.GenericResource
     * @return an instance of java.lang.String
     */
@Consumes
@GET
@Produces("application/json")
@Path("getlistfleuriste")
public List<Fleuriste> get1() {
return DB.getlistfleuriste(); 
}
@GET
@Produces("application/json")
@Path("getlistclient")
public List<Client> get2() {
return DB.getlistclient(); 
}
@GET
@Produces("application/json")
@Path("getlistfleure")
public List<Fleure> get3() {
return DB.getlistfleure(); 
}
@GET
@Path("getfleurebyid/{id}")
@Produces("application/json")
public Fleure getf(@PathParam ("id") int id) {
    List<Fleure> r =DB.getlistfleure();
   
    for (Fleure f : r)
    {
        if (f.getNum_fleure()==id)
            return f;
    }
    return null;
}
@GET
@Path("getbouquetbyid/{id}")
@Produces("application/json")
public Bouquet getc(@PathParam ("id") int id) {
    List<Bouquet> r =DB.getlistbouquet();
   
    for (Bouquet f : r)
    {
        if (f.getNum_bouquet()==id)
            return f;
    }
    return null;
}
@GET
@Produces("application/json")
@Path("getlistbouquet")
public List<Bouquet> get4() {
return DB.getlistbouquet(); 
}
@GET
@Produces("application/json")
@Path("getlistcommande")
public List<Commande> get5() {
return DB.getlistcommande(); 
}
@POST
@Path("createfleure")
public void create(@QueryParam("num_fleure") int num_fleure,
        @QueryParam("couleur_fleure") String couleur_fleure,
         @QueryParam("type_fleure") String type_fleure,
         @QueryParam("nom_fleure") String nom_fleure,
         @QueryParam("prix_f") double prix_f
         ){
    Fleure f = new Fleure(num_fleure,couleur_fleure,type_fleure,nom_fleure,prix_f);
    DB.getlistfleure().add(f);
  
}
@POST
@Path("cf")
@Consumes({MediaType.APPLICATION_JSON})
public void cf(Fleure f)throws Exception{
    
    DB.getlistfleure().add(f);
  
}
@DELETE
@Path("removefleure/{num_fleure}")
public void remove(@PathParam("num_fleure") int num_fleure){
    List<Fleure> f=DB.getlistfleure();
   
    for(int i=0;i<f.size();i++)
    {
        if(f.get(i).num_fleure==num_fleure){
            DB.getlistfleure().remove(i);
            break;
        }
    }
}
@PUT
@Path("uf/{num_fleure}")
public void update(@PathParam("num_fleure") int num_fleure
,
         
        @QueryParam("type_fleure") String type_fleure,
 
         @QueryParam("prix_f") double prix_f){
    List<Fleure> f=DB.getlistfleure();
   
    for(int i=0;i<f.size();i++)
    {
        if(f.get(i).num_fleure==num_fleure){
            f.get(i).setType_fleure(type_fleure);
            f.get(i).setPrix_f(prix_f);
            break;
        }
    }
    
  
}
@PUT
@Path("updatefleure/{num_fleure}")
@Consumes({MediaType.APPLICATION_JSON})
public void update(@PathParam("num_fleure") int num_fleure,
        Fleure fl){
    List<Fleure> f=DB.getlistfleure();
   
    for(int i=0;i<f.size();i++)
    {
        if(f.get(i).num_fleure==num_fleure){
           
            f.get(i).setType_fleure(fl.type_fleure);
            f.get(i).setPrix_f(fl.prix_f);
            f.get(i).setNom_fleure(fl.nom_fleure);
            f.get(i).setCouleur_fleure(fl.couleur_fleure);
           
           
        }
    }
    
}
////////////////////////////
@POST
@Path("createbouquet")
public void createb(@QueryParam("num_bouquet") int num_bouquet,
        @QueryParam("form_bouquet") String form_bouquet,
        @QueryParam("nom_bouquet") String nom_bouquet,
        @QueryParam("prix_b") double prix_b         
){
    Bouquet b = new Bouquet(num_bouquet,form_bouquet,nom_bouquet,prix_b);
    DB.getlistbouquet().add(b);
  
}
@POST
@Path("cb")
@Consumes({MediaType.APPLICATION_JSON})
public void cb(Bouquet b)throws Exception{
    
    DB.getlistbouquet().add(b);
  
}
@DELETE
@Path("removebouquet/{num_bouquet}")
public void removeb(@PathParam("num_bouquet") int num_bouquet){
    List<Bouquet> b=DB.getlistbouquet();
   
    for(int i=0;i<b.size();i++)
    {
        if(b.get(i).num_bouquet==num_bouquet){
            DB.getlistbouquet().remove(i);
            break;
        }
    }
}
@PUT
@Path("ub/{num_bouquet}")
public void ub(@PathParam("num_bouquet") int num_bouquet
,      
         @QueryParam("nom_bouquet") String nom_bouquet,
         @QueryParam("prix_b") double prix_b
        ){
    List<Bouquet> f=DB.getlistbouquet();
   
    for(int i=0;i<f.size();i++)
    {
        if(f.get(i).num_bouquet==num_bouquet){
            f.get(i).setNom_bouquet(nom_bouquet);
             f.get(i).setPrix_b(prix_b);
            break;
        }
    }
    
  
}
@PUT
@Path("updatebouquet/{num_bouquet}")
@Consumes({MediaType.APPLICATION_JSON})
public void updateb(@PathParam("num_bouquet") int num_bouquet,
        Bouquet fl){
    List<Bouquet> f=DB.getlistbouquet();
   
    for(int i=0;i<f.size();i++)
    {
        if(f.get(i).num_bouquet==num_bouquet){
           
            f.get(i).setForm_bouquet(fl.form_bouquet);
            f.get(i).setNom_bouquet(fl.nom_bouquet);
            
            f.get(i).setPrix_b(fl.prix_b);
           
        }
    }
    
}
@POST
@Path("addfleure_bouquet")
public String createfb(@QueryParam("num_bouquet") int num_bouquet,
    @QueryParam("num_fleure") int num_fleure             
){
  
  List<Fleure> fs =DB.getlistfleure();
  List<Bouquet> bs =DB.getlistbouquet();
  boolean f=false;
  boolean b=false;
   for(int i=0;i<fs.size();i++)
       if(fs.get(i).num_fleure==num_fleure)
          f=true;
   for(int i=0;i<bs.size();i++)
       if(bs.get(i).num_bouquet==num_bouquet)
          b=true;
          
    if (f==true && b==true){  
           DB.getlistbouquet().get(num_bouquet).getFleures()
                   
                   .add(DB.getlistfleure().get(num_fleure));
           return "ajout "+num_fleure+" dans bouquet n "+num_bouquet+" avec succé";
    }else{
        return "echec";
    }
}
///
@DELETE
@Path("deletefleure_bouquet/{num_bouquet}/{num_fleure}")
public String deletefb(@PathParam("num_bouquet") int num_bouquet,
        @PathParam("num_fleure") int num_fleure
){
  
  List<Fleure> fs =DB.getlistfleure();
  List<Bouquet> bs =DB.getlistbouquet();
  boolean f=false;
  boolean b=false;
  int pos=0;
   for(int i=0;i<fs.size();i++)
       if(fs.get(i).num_fleure==num_fleure)
       f=true;
   for(int i=0;i<bs.size();i++)
       if(bs.get(i).num_bouquet==num_bouquet)
       {
           b=true;
           for (int j=0;j<bs.get(i).getFleures().size();i++){
               if(bs.get(i).getFleures().get(j).num_fleure==num_fleure){
                   pos=j;
               }
           }
       }
    
   
    if (f==true && b==true){  
           DB.getlistbouquet().get(num_bouquet).getFleures()               
                   .remove(pos);
           return "remove "+num_fleure+" dans bouquet n "+num_bouquet+" avec succé";
    }else{
        return "echec";
    }
}
/////////////////
@POST
@Path("addcommande/{num_client}")
@Produces(MediaType.APPLICATION_JSON)
public Commande addc(@PathParam("num_client") int num_client)throws Exception{
    List<Commande>lc=DB.getlistcommande();
     List<Client>lcl=DB.getlistclient();
     Commande c1 = null;
     for(int i=0;i<lcl.size();i++){
         if(lcl.get(i).getNum_client()==num_client){
             c1=new Commande(num_client);
             DB.getlistcommande().add(c1);
         }
     }
     return c1;
  
}

@POST
@Path("createcom_f/{num_com}/{num_fleure}")
public String createcomf(@PathParam("num_com") int num_com,
        @PathParam("num_fleure") int num_fleure
){
     List<Commande> com =DB.getlistcommande();
      List<Fleure> fl =DB.getlistfleure();
     boolean a=false;
     boolean b=false;
     for(int i=0;i<com.size();i++)
     {
         if(com.get(i).num_com==num_com)
             a=true;
         
         
     }
     for(int j=0;j<fl.size();j++)
     {
           if(fl.get(j).num_fleure==num_fleure)
             b=true;
     }
     if(a && b){
         DB.getlistcommande().get(num_com).getFleures()
                 .add(DB.getlistfleure().get(num_fleure));
         return "ajout com fleure ";
     }else
         return "erreur";
     
}
@POST
@Path("createcom_b/{num_com}/{num_bouquet}")
public String createcomb(@PathParam("num_com") int num_com,
        @PathParam("num_bouquet") int num_bouquet
){
     List<Commande> com =DB.getlistcommande();
      List<Bouquet> fl =DB.getlistbouquet();
     boolean a=false;
     boolean b=false;
     for(int i=0;i<com.size();i++)
     {
         if(com.get(i).num_com==num_com)
             a=true;
         
         
     }
     for(int j=0;j<fl.size();j++)
     {
           if(fl.get(j).num_bouquet==num_bouquet)
             b=true;
     }
     if(a && b){
         DB.getlistcommande().get(num_com).getBouquets()
                 .add(DB.getlistbouquet().get(num_bouquet));
         return "ajout com fleure ";
     }else
         return "erreur";
     
}
  //
@POST
@Path("saveCommande")
@Consumes(MediaType.APPLICATION_JSON)
public Commande saveCommande(Commande c){
    DB.getlistcommande().add(c);
    return c ;
}

}
        
