function AnosLuzParaMetros()  {
  const anos= document.getElementById("anos").value

  const VelocidadeDaLuz = 3;

  const Dimensao = "10^9"

  const SegundosEmUmAno = 365 * 24 * 60 * 60;

  const metros = anos * VelocidadeDaLuz * SegundosEmUmAno;

  document.getElementById("resultado").innerHTML = metros + '*' + Dimensao;

  return false;
}



  