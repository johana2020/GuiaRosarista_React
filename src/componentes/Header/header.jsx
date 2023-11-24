import './header.css';
import logo from './LogoUR.png';


function Header() {
  return (
    <div>
        <header>
      <div class="Logo">
        <img src={logo} alt="logo" />
      </div>

      <div class="menu">
        <div class="IBox">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABCxJREFUWEftl11oHFUUx//nTpLNzsZaojQ7k1TBirUQkoiIIn7URx+0VSHuLLUmPogfIDRqzYNgig9Sa6l98AtUVOruZgUpKr7aPkQFUWMThFAL0SY7W42a0u7MJtmZI/OxsjSb3bvpPgTxvs3MOf/zm/89994ZwgYbtMF48N8BSkf1rSR4xHXRT4Rez2lmTJPAJFw6Yti5s+txf10OpVR9NwEfAHxl9aJ0noGhpJU73ihUw0CZqDbChMMyhZixL2mbr8vElmMaAkrFevqIne8AtIUCX8PFaLE9MuVdq8WlPlfQQYBvC58vK4JvGryY/1kWShroK6Alr8a/B6jPFycenynkk2OAW1ksCyiuqo0z8JAfBkx2WeYt9wAlGShpoFR7/G4SdCIU/bvYFrlueHF2sVqRD6/ovqrN4TPlHmMWtyft+W+aCpSJ6cPM/H4o+qlhmb4Da42MGv+MQff5q4/wSLJgHmsqUCqm7yfmg8Fs8asJO/9CrQKpmHaYGCMBED+XLOSlFoL0lGVUfReD/WVMwPGEZT4g7RDo/qSV+7ypDmXb9Wscwb+Gon8tK+KGRy/M/1mtyEcdXVtaXXEawKbgeUu3YZ3NNRXIE0ur2pcA7g1WGWVnCjnj0lU2BojtqvYJgAcDAPrCsHJ+L8kM6SnzgaL6VhDPAIiGxb6Fy/uVaPGUXVJbWld4BwkcqtiHLIfF9j32/JwMTNgOsqFBXDqqPwPiozJZDH46aeXflIktxzTkUDmp3llGwKIL2ivbyJXA6wIqT1/FaT8AbydmmmLBky0oHRos/JFvxJnLcmg9hWRzGnYoi55oKcoDgpwBhuiqVojgnnNZmVyyW38cxmxRFka6qb2lfGMs/iwzHgdoW7A3Sg0G4TS7eMuwzaMEcL2susLZSM/1juJ459Ct9cTqPJ9QHGVocGnul1pxNYFSMW0PMd4FEKloukUGpgH6CcDCGuJXA9xPQC8DmytilohpKGHnMmtBrQmUiWzZxooyDaA9TF4GY9SwzSOyTjFA41FtHxNeqfioK5Lj9CaWfj9Tvf+q3A22f32iYsedJRK7E4V5z5WGx8ex7gHBrncwXxsmTyQs885qPVXVoUxMH2Vm7628UWJSbk4W5k41TFKRkIl19zO7PwAQ/m3i541C/rVLNasCpVU9B7AWBPOYYeUPXA5MOTetai8DeDG8/s2wzLJj/8qvAspu6ul0Sk75s8JV1ZXNuxYWLjQD6Fhn5yalGDlf1lqx3I69OFeo1F4FNN6u3eUKnPRdBaYSlhl81DdppFXN+wPZ4ckJpjsetnMTNYFSavwpAr0RAr2TsMwnmsTiy6TV+HsAPRZqPmlY5ts1gdKqPgbwS0EQHTCs3FhzgWrrr5qydEd8J1yx04cQ7gnjYr7869MUrnr6dY+OplA0IPI/UD2zNpxD/wDD/4I01PNk0AAAAABJRU5ErkJggg=="/>
            <a href="./Views/Perfil.html">Mi Perfil</a>
        </div>

        <div class="IBox">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAflJREFUWEftmL8vA2EYx7/P2xC5WGyn/wqJWkgkxER7YpOINAYjCwZhNIhBbKIdTRYWhCDR1X+gb4XR3VFyjxTDtb3re29b0sjd+j4/Pvd9fuS9I3TYQx3GgxhIVZFQhXI95hAJGgCoWxVE75zLwsPl9Ku8CPILBMobyR2As3qJ9KyJsJ225VKtVx1QzkhOEvhIL3xz1kQ0mraLJ37vOqC80b8CYOPLiHAOprPm0oV4EafAGKqcMmHFsuWmAii5BvDqtxGtZ5ziWjuB8kbj+AEKxUBVFfh/CuWM/nkG7mYcWYjSa/o91Gum4InUV3DhnWVeSg2n7CfBMghzGVseqKC0gVQBa8+rE2DPdGR2GPgIi/PXQJVVcZMQ3sTUS+kpCEobKO8vWRS5fIvOZ14Ce5MZ9/G2saL1e04xZVGIQm3KQX2lr1DVJm0J6IOBBcuR+/4o+kDtKdkzs5iw3Ifrlkumq0nNlFWuoIV3vI/POs+yLU3dEhDjIOH2zU3hvty2sa+aMo3FSMBi2pF7qhfS7yHF9aC+J8wsMRfS7uONCqZy/utAUSBamzJNhWKgDrjCdtgl/9AwxwToWLc3mrFnohHLLp76fcM+FHcBXmgmSVQfZmxZrlyutW/4KS0EDTKoK2qSKHZM/Jbw6GLaLV4F2cd/P1QqxgqpFPoEfAxiNPIXqGgAAAAASUVORK5CYII="/>
        </div>
      </div>
    </header>


    </div>
  );
}

export default Header;