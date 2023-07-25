{/* <img src="images/dice1.png" alt=""></img> */}




function dice()
{
     var random_1 = Math.floor(Math.random() * 6+1);
     var random_2 = Math.floor(Math.random() * 6+1);
     var rand_image_1 = "<img  src='images/dice"+random_1+".png'>"
     var rand_image_2 = "<img  src='images/dice"+random_2+".png'>"
        document.querySelector(".playerr").innerHTML = rand_image_1
        document.querySelector(".playerrr").innerHTML = rand_image_2
        if(random_1 > random_2)
        {
            document.querySelector(".title h1").innerText = "Oyuncu 1 kazandı!"
        }
        else if(random_2 > random_1)
        {
            document.querySelector(".title h1").innerText = "Oyuncu 2 kazandı!"

        }
        else
        {
            document.querySelector(".title h1").innerText = "Berabere"

        }
        
       
}



    