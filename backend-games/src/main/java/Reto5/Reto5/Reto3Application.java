//Estructura proyecto
//1.Modelo o Entidad - Se construyen las tablas
//2.Interface - Se hereda del JPA los metodos CRUD repository
//3.Repositorio - Construir los métodos para consumir ese crud
//4.Servicios-Colocar las condiciones de los datos del JSON (Validaciones)
//5.Controlador o Web - Donde creamos la URL de la API REST

package Reto5.Reto5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Reto3Application {

	public static void main(String[] args) {
		SpringApplication.run(Reto3Application.class, args);
	}

}
