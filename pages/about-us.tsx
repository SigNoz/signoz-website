import Card from "components/Card";
import AuthorBy from "components/AuthorBy";
import Button from "components/Button";


const AboutUs = () => {


  return <div>
<div className="grid grid-cols-4 gap-8">


  <Card className="col-span-2 col-start-2 ">
            <p className="text-signoz-medium font-bold text-base">Why the name SigNoz?</p>        
            <p className="text-signoz-pure mt-2"> 
            Some of you may wonder, what does SigNoz mean? As engineers we are obsessed with the idea of signal vs noise. 
            How do devops engineers find signals which they can act on from the various sources of noise they encounter from their observability systems? 
            <br></br>
            This is one idea we obsess over and seems important enough to continually strive towards.
            <br></br>
            <br></br>
            And, hence the name Sig.Noz ( Signal vs Noise) 🤓

            </p>

  </Card>

  
        
    <Card className="col-start-2 my-8">
            <AuthorBy avatar="/img/authors/pranay.webp" name="Pranay Prateek" position="CEO"/>
        
            <p className="text-signoz-pure mt-2"> After spending a lot of time in college reading philosophy, I got interested in technology. Biometric & image recognition was especially interesting to me. Led product teams in startups & MNCs like Microsoft, before stumbling into the domain of observability.
            <br></br>
            <br></br>

            Reducing noise in developers&apos; and devops&apos; engineers life is my current passion 
            </p>

            <Button className="px-4 py-2 my-3 " > <a href="https://twitter.com/pranay01">Twitter</a> </Button> 
    </Card>
    
    <Card className="my-8">
            <AuthorBy avatar="/img/authors/ankit_nayan.webp" name="Ankit Nayan" position="CTO"/>
        
            <p className="text-signoz-pure mt-2"> Playing Badminton professionally was my dream at one time. But that seemed too tough, so I started coding. 
            <br></br>
            I have delved in all sorts of technologies including crypto when it was exciting.
            <br></br>
            <br></br>
            Always interested in solving interesting problems with technology. Microservices & Distributed systems is what I am most interested in these days.</p>
            <Button className="px-4 py-2 my-3 " > <a href="https://twitter.com/ankitnayan">Twitter</a> </Button> 

    </Card>
    
        
    </div>
    </div>;
};

export default AboutUs;
