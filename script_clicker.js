let wielkoscOlka = 0;

function przytyj()
{
  wielkoscOlka ++;
  document.getElementById("licznik").innerText = "Waga Olka: " + wielkoscOlka;
        
  const buttonClicker = document.getElementById("buttonClicker");

  if (wielkoscOlka >= 100)
  {
    buttonClicker.classList.add("upgradeRare");
  }
}
