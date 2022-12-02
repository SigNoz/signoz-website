import Card from "components/Card";
import AuthorBy from "components/AuthorBy";
import Button from "components/Button";


const AboutUs = () => {
  return <div className="grid grid-cols-4 gap-8">
        
        <Card className="col-start-2 ">
            <AuthorBy avatar="/images/users/vishal-sharma.webp" name="Pranay" position="CEO"/>
        
            <p className="text-signoz-pure mt-2"> After spending a lot of time in college reading philosophy, I got interested in technology. Biometric & image recognition was especially interesting to me. Led product teams in startups & MNCs like Microsoft, before stumbling into the domain of observability.</p>

            <Button className="h-3 p-2"> Twitter </Button> 
        </Card>
        <Card>
            <AuthorBy avatar="/images/users/vishal-sharma.webp" name="Pranay" position="CEO"/>
        
            <p className="text-signoz-pure mt-2"> After spending a lot of time in college reading philosophy, I got interested in technology. Biometric & image recognition was especially interesting to me. Led product teams in startups & MNCs like Microsoft, before stumbling into the domain of observability.</p>

        </Card>
    
        
    </div>;
};

export default AboutUs;
