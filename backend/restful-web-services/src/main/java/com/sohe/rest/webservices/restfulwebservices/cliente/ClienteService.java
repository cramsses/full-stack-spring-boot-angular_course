package com.sohe.rest.webservices.restfulwebservices.cliente;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class ClienteService {
	
	@Autowired
	ClienteRepository clienteRepository;
	
	public String exportReport() throws FileNotFoundException, JRException {
		String destPath = "C:\\Users\\sessm\\Desktop\\Reports\\";
		
		List<Cliente> clientes= clienteRepository.findAll();
		
		//Read report file and comple it
		File file  = ResourceUtils.getFile("classpath:clientes.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(clientes);
		Map <String, Object> parameters = new HashMap<>();
		parameters.put("createdBy", "Ram");
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters,dataSource);
		
		//Generate report
		JasperExportManager.exportReportToPdfFile(jasperPrint,destPath+"clientes.pdf");
		
		//JasperExportManager.exportReportToPdfStream(jasperPrint, outputStream);
		
		
		return "Report genertated in path :"+destPath;
	}
	
	public void exportReportDwnld(OutputStream outputStream) throws FileNotFoundException, JRException {
		
		List<Cliente> clientes= clienteRepository.findAll();
		
		//Read report file and comple it
		File file  = ResourceUtils.getFile("classpath:clientes.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(clientes);
		Map <String, Object> parameters = new HashMap<>();
		parameters.put("createdBy", "Ram");
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters,dataSource);
		
		//Generate report
		JasperExportManager.exportReportToPdfStream(jasperPrint, outputStream);
		
	}

}
