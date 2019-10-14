# CBS-Pant
CBS Pant A/S

CBS Pant A/S 

 

Indholdsfortegnelse 

Beskrivelse 

Liste med krav 

Klassediagram 

3.1 Set indefra 

Beskrivelse 
 

Vision: 

De studerende på CBS er ikke særlig gode til at give pant i skoletiden, men dette hænger også sammen med, at der ikke er mulighed for at aflevere sin pant nogen steder – eller også er det bare dårligt formidlet. Dette resulterer i, at langt de fleste glasflasker, dåser og plastikflasker bliver smidt ud i skraldespanden. Det vil vi gøre noget ved.  

Ved at installere en pantautomat og etablere vores IT-system, vil dette kunne blive drastisk undgået. Vi vil, ved hjælp af donationer til velgørende formål og en bonusordning til NEXUS, gøre det attraktivt for både studerende på CBS og CBS’ medarbejdere at samle pant ind.  

100 % af alt flaskepant går til op mod tre forskellige velgørende formål, som den studerende selv kan vælge imellem. CBS donerer til gengæld 10 % af alle donationer tilbage til den donerende student, som så til gengæld kan bruge dette beløb som kredit på Nexus.  

Qua CBS’ fremsynethed og sans for sustainability vil dette give CBS en masse god omtale. På samme tid kan de studerende aktivt være med til at fremme en god sag.  

Vi har valgt at etablere et system hvor brugeren kan benytte sig af at registrere deres pant i stedet for at smide det ud. Oprindeligt var projektet tænkt som todelt og bestod hhv. af et system ved selve pantautomaten, hvor man scannede sit studiekort og panten herefter blev registreret i systemet. Derudover af en webplatform, hvor man ved login kunne se sin donationsstatus samt sin optjente bonus. I denne opgave – som følge af kompleksiteten ved ikke at have fx en pantmaskine og andet fysisk hardware til rådighed - er hele processen omdannet til én:  
 
For at kunne registrere panten fra flaskerne, skal man som bruger logge ind med brugernavn og adgangskode. 

 

 

 

 

Herved skal der forstås på forhånd, at man som bruger allerede er registreret i systemet, så længe man har et eksisterende CBS-login hvilket vil sige et brugernavn og adgangskode. 

Efter et succesfuldt login, kan man vælge mellem følgende muligheder: registrere antal pant flasker, se samlet donation indtil videre eller de fordele man som bruger kan have i Nexus og til slut logge ud. 

Panten registreres ved at man skriver antal af de eksisterende panttyper a, b eller c man vil indlevere. Hvis man bare gerne vil videre til panthistorikken, trykker man på ‘intet at registrere’. 
Herefter trykker man på bekræft og føres videre til panthistorikken. Denne giver et specifikt beløb til rådighed for den enkelte panttype. 

Dette beløb vil man herved kunne vælge at donere til en udvalgt række organisationer: x, y og z, hvor der til slut opgøres hvem, som har modtaget donationen og hvor meget der er blevet bidraget med.  

Når donationen er gennemført, bliver man viderestillet til forsiden, hvor man igen kan trykke videre til at registrere antal pant flasker, se samlet donation i kr., Nexus fordele eller logge ud og afslutte processen. 

Liste med krav 

Aktører: 
- Studerende 
 
__Studerende__ 

Studerende er på forhånd oprettet i CBS-pant-systemet via CBS-kontoen. 

Studerende skal kunne logge ind vha. CBS-mail og kode. 

Studerende skal kunne registrere mængden af indleverede pantflasker A, B og C eller vælge ikke at registrere noget. 

Studerende skal kunne se “panthistorik” med oversigt over de indsamlede panttyper; A, B og C. 

Studerende skal kunne vælge hvilke af de 3 velgørenhedsprojekter x, y eller z, som pantdonationen skal gå til. 

Den studerende kan vælge fordelingen af det indsamlede beløb til et eller flere af velgørenhedsprojekterne. 

100% til en af følgende organisationer: x, y eller z. 

50% til to af de følgende organisationer x, y eller z. 

33% til hver af de følgende organisationer x, y eller z. 

Den studerende skal kunne se en oversigt over donationen i kr. 

Der skal være en oversigt over det samlede beløb til gode i Nexus. 

Den studerende skal kunne logge ud og afslutte processen under hele forløbet. 

 

Klassediagram 

 

 

Set indefra 

Bruger: 

Vi starter ved vores front page, som er vores login til vores IT-system. Der er kun en mulighed, som enten giver dig adgang eller afviser din adgang. Vi har valgt, at man på vores system skal logge ind med sin CBS-konto (da projektet i høj grad hænger sammen med CBS), hvorfor man hverken kan oprette sig som bruger eller slette sin bruger. Derfor skal man bare bruge sit CBS-brugernavn, som er en string, og sit kodeord, som også er en string.  

Hvis brugernavn og kodeord passer, vil man blive ført videre til vores forside via en funktion.  

Eksempel på hvorledes log-in fasen kunne se ud: 

 

 

Forside: 

Når man kommer til vores forside, vil man blive mødt af objekterne; registrering, Nexusfordele og samlet donation.  

Objektet Registrering er et link, der fører brugeren videre til klassen, Registrering, via funktionen registrerPant.  

Objektet Samlet donation indeholder en funktion, der fører en alert-box frem, hvori der vha. matematik vil blive lagt objekterne pant a, b og c i kr. Sammen. På denne måde kan man ved et klik se sin samlede donation. Dette number vil blive efterfulgt af en string i form af “ kr.”. 

Objektet Nexusfordele indeholder en funktion, som fører en alert-box frem, hvori der vha. matematik vil blive regnet 10 % af sin samlede donation. Dette number vil blive efterfulgt af en string i form af “ kr.”, som så vil vise den kredit brugeren har at kunne bruge hos Nexus. Dialogboksen kunne se således ud: 

Hvor variablen x er defineret ud fra dit afleverede pant.(afleveret pant * 0,1) 

Til sidst har vi også funktionen logOut oppe i hjørnet, som kan logge brugeren af og føre tilbage til klassen Bruger. Denne funktion vil gå igen gennem alle de kommende sider.  

 

Registrering: 

Når man har trykket på objektet Registrering fra forrige side, vil man komme til registreringssiden. Her vil der være et array, som indeholder de forskellige typer pant, a, b og c. Under hver af disse vil man kunne skrive et antal af den givende type pant. Dette vil være et number.  

Hvis man derimod ikke har noget at registrere, da man gerne vil videre til Panthistorik, kan man trykke på objektet Intet at registrere, som har værdien null.  

Nede i det ene hjørne vil man kunne trykke på funktionen submit, som vil tilføje de forskellige antal pant til objektet Antal pant i stk., som man finder under Panthistorik, samt føre brugeren videre til næste side, panthistorie.  

Oppe i det ene hjørne vil man kunne trykke på funktionen logOut, mens vi oppe i det andet hjørne har funktionen tilbage, der vil føre brugeren tilbage til forrige side. Denne funktion vil også gå igen gennem de kommende sider.  

 

Panthistorik: 

I klassen Panthistorik har vi objekterne Antal pant i stk. og Antal pant i kr.  

Ved Antal pant i stk. kan man se hvor stort et antal panttype man har pantet af henholdsvis a, b og c via et array. Her vil antallet stå med et number.  

Ved Antal pant i kr. kan man se hvor meget i kr. man har pantet af en panttype. Dette regnes frem ved at bruge matematik, der ganger antallet af en specifik panttype med den tilhørende panttypes værdi (1.0 ved pant a, 1.5 ved pant b, 3.0 ved pant c). 

Trykker man på funktionen vælgDonationsmål vil man blive ført  

Oppe i det ene hjørne vil man kunne trykke på funktionen logOut, mens vi oppe i det andet hjørne har funktionen tilbage. 

 

Velgørenhed: 

I klassen velgørenhed findes objektet ‘donationsmuligheder’. Donationsmulighederne angiver de forskellige typer af gode formål, som man kan donere til.  

Der er mulighed for at donere til flere formål. Når der trykkes på det enkelte formål, markeres boksen med et flueben. Donationsallokeringen er således baseret på hvor mange formål som er markeret. Hvis kun et er markeret går 100% af donationen til det enkelte formål, er flere markeret fordeles beløbet ligeligt ud på alle markerede.  

Herefter kan man trykke på funktionen ‘næste’ som fører videre til donationsklassen, hvor donationen kan bekræftes.  

Oppe i det ene hjørne vil man kunne trykke på funktionen logOut, mens vi oppe i det andet hjørne har funktionen tilbage. 

 

Donation: 

Objekterne i klassen Donation er valgte organisationer og donationsallokering i kr.  

Her vil alle de valgte organisationer stå listet som et array.  

Ved hver organisation vil der stå en donationsallokering i kr., som er udregnet vha. matematik. Denne matematik regnes ud ved at man dividerer det valgte antal af donationsorganisationer med den samlede donation, som man finder under forsiden. Summen(e) af de matematiske udregninger vil stå ved hver enkelt organisation efterfulgt af “ kr.”.  

Der vil være en funktion, der hedder bekræft, hvor man bekræfter sin donationsallokering og bliver ført tilbage til Forside. 

Oppe i det ene hjørne vil man kunne trykke på funktionen logOut, mens vi oppe i det andet hjørne har funktionen tilbage. 

