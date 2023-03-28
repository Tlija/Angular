import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
profile={
firstName:"tlijani",
lastName:"hachem",
website:"www.tlija .com",
linkImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAaVBMVEX///8Dm+UAleQAl+QAk+MAmeUAkuOLxvC83vYxpujF4vfo9PwAnOX7/v/N5vjj8fva7fp2ve2Wy/Gez/Lu9/1IrOmt1vRXseqn0/Niteu53PWEw+/T6flvuu3r9fys1vQro+dNrukAjeJlWHDwAAAO3UlEQVR4nO1dC5OrKrMdQTQaTTTGaGIyY/b//5Gfxjx8QHej4Jxbd1bVOVV774gsgX7RNF9ff/jDH/7whz/8X0f8/O+/gXi/u2R+WtyDyOGcM8aa/0d1Xtyq7LLba7e3+dc08W9noaea2IZZmjveg48Qwhmg+QvRkvWiwr8kGq2eePM021jrNQXfGz/nLuNjUjI8WOZ+SJxwWUuPl3b7D+B4SaOWGU5swJG5eUYZxbRtmB+s05Di6teuJrM+RScNsTfc29ZFtQaZEXapYHwetTdFxs4XcJo+XiBua3F6Ye9HbOawSRiqX8Mev7mvyKzBJfcWjtuAIXfPCtlYdq+pV+R2PAgzA9dnyHgqU25B9898NXLblDpwD1X3wkQTShg6/ljth6z7N7YWuZuHD5xo9bcIGkPlkJXl6fRTZocqLYKHzoce525QHntvi1//4B6VPTKIY4qRa5kFaRnupeIw3odlWoMcuZeX2+fPt9Hrd0zfmtPHAV5yDTVxK3FdHV+zgqmbagRNnZ6u+13F3n/HrtbJbRxozTWdopkhT+wqSLE0rQ0+gHWj8/vuAuS4N1w0JCQVWQLzkw1OH2Qu0BHOq5lrY5ND7fbeYNXo3AZM/WpWL/m0CUUU2zU6S+ATs3rpsvgmELRodMZ39dDxSG0u0rEvoHX9oGfN6NypzQ3BMlMviRBLKDD0ojEOnvKV7tmgLeEjA2juTX2oJ6YQqCuqhaSGBtCK0fmxiqbvK4xH51JgAF0LscCdWqZ4NoI7F/X7LBidJ+WyE45OLI8O9WxxjRudvpIdD2yFjeNAsQCZ2YXerATlTGFnw6/qo5DzM210ntXs7EblbtIXc1MatoPiIzZwfaMvmkI6bbjRt97V7OwHjG+Slxs1OtVjx2yPneL1ojDX/FnNLjX3FgDBVD+YMzrli7sFtykze4ij6btNte2rzUxbdvsE+4l95hlquQQsv/U2gS/jXhgyOkPAAbJjicmRjtY/2+LP4NirrVrXcrRqhNHyYya+bSxn1oKvvMeWDKeREaMzVwd1IgPNa8EfTE8TRmeldpi9NRdeh8H0NGB0btRixazNR8PVM9qBbyBWWy/vrT5uvaUiFttLtXrh/cLUbHDsfe/FRiew8Pg6puYEh16XFlpMO/XCc/hv5az1+rBQcqvJOezHTGf1cfpMT7GoIZkP+UJtpKuz8FEOi4xOaGq6v5hu+Al9ukuMTomD9Z4VK6cEKTq2xOgEpOYvKYUXfl49W2B07oGpaTLKMQcvZczn7yQClvS6Xp4EL903P2UV2Lr49cH7ip9++/zsAWhr2/zehS7SrnuzjU4f2jfUs4X2m6y63fM8L25+uZNv3mZ5oKVpkm74xMwo3RGYmjrpQNuy6NLFO3DO3Oh2mmqrWrh6QrCLeopc66E3UjDtgtrKTyBLqm7zww7DncdvV1fGn5akrG4BpUBdz/GBA+6GG/QDCc1S0FVh3fSal7J6hgbPI+U+/ADkup7x6p3EyPQ1dDe/ZgVyE2jwSFrhOMzIEs+TNcN0GO7dT+2n2rR/q0vv+njBrJRVcPAogmXTz8jibnQ+nDZheCmrOx+kpTbLMAr4o6Pa9tXD8JxjdELmGGm699N6WJQNxMi+lCfMa9N7qC42w3G5QYNH0KS9rVQeScZ660vWpTa9xGs0DdM3Oo/g4OHfq5dp46kiddmEoL7xX9zv91yfHuQIEfz/3l4Z8CniavQRjWdxqF4MGSz43Lx8us3BrKFRvtha9Epw8LBebD8zE5VqgzyStegBIYgGLvL0ZwecYEQeevuRK9EDUuIcXKdn76dJUd7yM5NXogeqdMw9jnVDkJ/PsQ49WLA4Lpxj+PESqXtTNwNRIQ3AggXzhT4PM2qAtV6VniQ5pgckzekTn6HHQV/pHKvQAx09dOnd399GY9/0OaFXoZfBcxNWZfE8ObgivVpF7Nlr8OGwZ45pxNK6T7oGvS18cACJ3PQ2FnX8sHg1eojcRA4l9VSmlh9WzfHW5wAKvDtoHklA/uUQj6DlCvRi5FALMuX646wVPq7XoRfCJgumq/szW2tbuF20K9CrkDNzyE59n57WwdbrjEDgDCBqAXMXBnKp1nnxKqN3RJYedppz8GOtfK9CrEBvgyw9bLMwGPxaZ3860w/C6wPc9HLw+TNyFcU3+c2ND22fHqL1UFPkMP485Aj5UXuHaAaQuYkmyUz0iiDPz8g+vQSlh7UwEU0uNcpaCOv0LljJFTRBrZjMbpdovaTeP9sVIDDJgu/0SrIpeE3Ki4qPR9sJhtNvP6KH79NLWhDu75VLGwCO35LMZKmzz3IjpykWIobDLLTEbOkEECuc70MBnDV50iOYWYpcJh79ejlGzBuiJXDdFQvYM1lsYQ5OmF4geeCxqhXB4Bm6q3yDqCYfc2JSTeiRdPRVfbLdgRooXW4Q3kSawYlIDtlD/VGLKBao44Po5NHC9OgbpvbIVuFB7TYKr1DtwZilN02yDrBHyFYhUM6lIXiTyxjb9DCtrhG7LMGsJteX2V/lP9dlktQlLbT17Jjb4N+EHtqoRmg2BEtxcZkGjePj9z65hqdDmvNZ1VkFc25ZmGyPcYNJ++jk0HFZvsEyOfJsnh62p7NujVbOKsi7RLZlNem1Lg7cWIC4unEpdAh6FexxYBFq7VBdCK8hpYzpfSG0S+/G0FI4WBRQv+RgfIMHULiYEYvaia+WatRZxOnpn4kIwfqPBEs7Ic5P3BVGtvaceeeMK6QWnneGe3alzE9KRJVAb8454z1UKNFpNRU8JzJ8fnJKpR/C5JznlF4QCYgUN4NTNR4NUKI0OL25BSNjZIYKDonkBK2ESArG4Yph/jHqLViFFchqbYHGzmnGFE5vwcGoMALXEFQGDMuTIlYKxGXwomPUJXiugatjqNMqNANQ859QdguPUcc+tAQBfojuJAo8ZGvWWV675/sMOBLqkkuq6FQHqi2FLWETVcqvgBZUVmWFd/ypZR7hPNVHSwaOlAJaUGV8wLLFI+5NoKEkQ1twvnKGKtY2bFhTM0zQQKCpu2O+VTWLFVF+2O6kinM8lmOsznWoqFksX9xbaPTIyhhOgddqCsdBqiTkdhFoT5HLIKJbKEYrP8lLrst378HRI88obANMI/+bgkzyPrnPBUbdyG4MGug0U/bsjatkAdayH0JdojuhaBTedDHa72nNYuk5Cei706U5ljqAT/Qo0LO64wk/aW8hc5H+xdHEDzQ3wiOein7jOKYnTU+Adj/o8S2C6EQSdzxtw2bii8uEsxl6BI8PkS2efjxmnEsh+4CG6OE+AzLTvRmaf7SwXEkaIURPI7ZMkC2wjeDNqHIwMphl88MQPULMG7ZbvDmqcdh52fEVQ/TwYBlSOcubE+sdmvIW6eH7z8ji8+ZUUBlmQ1mcnIsXX9tR/cJvg97LfCJT9HCfCHaOW3r6htsglqKrGLR25XB6oOho6emrhoHq01XrWvTwcBKotx+rSDue9tOjp22UadHDzU6nBh730A8gQ5+e1KQ2Rm+hauhkoG7RzH4MS1q+zhg9is8HKDYP/YUM/fIwUrPBHD2odN4TgEv31GCaZWV73qp8YpujR5CdwOx80tO7xKO/6y0XSwbpgYWEgC/cp0cp9vFBb+kpvotBetclZvXbvNK5SaDXsic/VGWQHmEfTH0mvWc9kpVfb/BUKQ4m6WF7vdDS+tATEZFff+WppoVJenjqnDqa2xs9QTz91ZssnmpWmKRH2AhTxhYHrg3pcE1v51WdKW+UHp6epJxFo7su7ugE7d2dBNz3Y5QeZZtWIfhHuwZYyt+xd/MckDpgmB5Y37Hrt6Ivkwe5A1SOP/UyiiF2hukRDE9F4WbZno/w5Tow7O+AMdBJNEyPMHzyhSJ9jnvBYfw1ksPgam4P3rswTI+w+jxpusWDHuO1cIe3bnPG8jS77K7J9Rqe/EIM8sAF1kXT9JCKSY5KtbePPRJsj5sqGibri67AandQYdCUW2AC1jS9yW1UU0j9hjaM+zYbH3VGcSEc4ea3cXq46SJdfd5o8z8+FQy6HF64NWUHxDg9Qo6vLIdIsgEWb26CyQZRcMZTWsEo8/Rwx0Gm+zwhTYFKsntbWrxfW7yRNT75zI4FeupThi9IfNa8UOqv7e50qG7noihuqV+GWtcZW6AHXvPSYbX7zWzQixfFzIzCBr2vED91s9JhZiv0cNtlrUs17NADbk18wrVdpaODHXoE6SlWuQfMEj3gttkXvVWu1LVFD08FWeXmUmv0JklRU34rSE9r9PDlJ2pDHADYowdeh/zACpcoWqSHG2f2l59Nerh4sX6bm1V605zSMTi9Wt4sWKWHi08R2dXudunheayWr5S3TI9wfnXmXVw02KYHXvL5ALd5F6Z1el87VP1ZHD/79PBsOh5Yky8r0MPLW5L3m7WxBr2vPVbkh7rfrI1V6H0dgcvJO1iyz9ah19hnqP1pxb5eix5e/4bXWgFaGlajB5WQew2g+ejnevS+EgctRheYHsAV6X3FBaohXEKdUo0XgsfyTdNrHXjUQwJrOerhABcsM0/vaw/XWGvh1mbKqU6vIRzTM/chPzigA+i4+WKCR9klkiN2aIGyWdjn+Pa0my8qwpDcXLQgqrBWFPqE17gTrJ5rxsSnAF/hwuYOHFbhqesCBwsTKhDe8AKIdsm12BYEgsKtM52y2/HmxqFsig4sApLVjCG54zKmTbuqD7QciGt2d3Fuwg1syEtph0gEHc74ObtCDu924+dMmiIy+ViFxgVji5GcpZccT785Z159O1yu2wHLeL+7HG4BcynUGmklfMtR1Qm+K3Ip1DanpZl+UR3keR7UkWj+NMkyU4J7M24JNgGCHB8T1a3wK1ikSA1dA/tK6DLU4sbS366av0sJIn0ON5ffVrpTGMGucmYVXVZT425U/fa49ZG0ussIxTZpsCgtRDeWYne4k3SYmlkzarzI1lRwmkhOadDmFmtKyIYYc3leXf6DozbBfpPdcuF1pd4hns80Ty+6p2W4tuJeiDhpS70XedQMTKPGXTZAu1Lr+7nKLrv/wpU3SxDHx32S7MIndtekLVH/2736wx/+8Ic//P/B/wA4ja8kigxrzgAAAABJRU5ErkJggg==",
number:20,
}
titleStyle="block"
style1 ="red"
style2="30px"
style3="underline"
date="03/24/2023"
Namee="maher"

constructor(private route:Router, private share:ShareServiceService,private http:HttpClient){
 this.share.print()

 this.http.get( 'http://localhost:3000')
}

printData(event:string){
  console.log(event);
}


verif=true
dataArray=["tunisia","libya","Algiria","Egypt"]


constractor( ){


}
inc(){
  this.profile.number++

}

dec(){
  this.profile.number--

}
show(){
  this.titleStyle="block"

}
hidden(){
  this.titleStyle="none"


}
gotToView(){
  this.route.navigate(['/profile/view'])

}
goToDetails(){
  this.route.navigate(['/profile/details'])

}

}
