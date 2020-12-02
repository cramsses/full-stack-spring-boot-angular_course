package com.sohe.rest.webservices.restfulwebservices.cliente;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import net.sf.jasperreports.engine.JRException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClienteResource {
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping(path = "/jpa/clientes/report")
	public  String generateReport() throws FileNotFoundException, JRException{
		
		return clienteService.exportReport();
		
	}
	
	@GetMapping(path = "/jpa/clientes/dwnld_report")
	public  void generateReportTDownload(HttpServletResponse response) throws JRException, IOException{
		response.setContentType("application/x-download");
		response.setHeader("Content-Disposition", String.format("attachment; filename=\"clientes.pdf\""));
		
		OutputStream out = response.getOutputStream();
		
		clienteService.exportReportDwnld(out);
		
	}

}
