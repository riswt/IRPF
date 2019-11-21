function calculo() {

  var nome = document.getElementById("nome").value;
  var sal = document.getElementById("sal").value;
  var porcINSS;
  var INSS;
  var porcIRPF;
  var dIRPF;
  var IRPF;

  if (sal<1751.82) {
    porcINSS=8;
    INSS=sal*(porcINSS/100);
  }

  else if (sal>1751.81&&sal<2919.73) {
    porcINSS=9;
    INSS=sal*(porcINSS/100);
  }

  else if (sal>2919.72&&sal<5839.46) {
    porcINSS=11;
    INSS=sal*(porcINSS/100);
  }

  else if (sal>5839.45) {
    porcINSS=20;
    INSS=642.34;
  }

  if (sal<1903.99) {
    porcIRPF=0;
    dIRPF=0;
  }

  else if (sal>1903.98&&sal<2826.66) {
    porcIRPF=7.5;
    dIRPF=142.80;
  }

  else if (sal>2826.65&&sal<3751.06) {
    porcIRPF=15;
    dIRPF=354.80;
  }

  else if (sal>3751.05&&sal<4664.69) {
    porcIRPF=22.5;
    dIRPF=636.13;
  }

  else if (sal>4664.68) {
    porcIRPF=27.5;
    dIRPF=869.36;
  }

  IRPF=sal*(porcIRPF/100)-dIRPF;

  var arreINSS=parseFloat(INSS.toFixed(2));
  var arreIRPF=parseFloat(IRPF.toFixed(2));
  var salLiq=sal-INSS-IRPF;
  var arredondado = parseFloat(salLiq.toFixed(2));

  document.getElementsByTagName('table')[0].innerHTML+="<tr><th>"+nome+"</td><td>R$"+sal+"</td><td>"+porcINSS+"%</td><td>R$"+arreINSS+"</td><td>"+porcIRPF+"%</td><td>R$"+arreIRPF+"</td><td>R$"+arredondado+"</td><tr>";


}
