import Advantages from "./advantages";
import InticedeTeam from "./InticedeTeam";
import SeamlessSolutionsSection from "./SeamlessSolutionsSection";
import WhatDrivesUsSection from "./WhatDrivesUsSection";
import WhoWeAre from "./who-we-are";
import YusufProfile from "./YusufProfile";
export default function Home() {
    return (
    <div className="bg-white min-h-screen">

    <WhoWeAre/>
    <SeamlessSolutionsSection/>
    <WhatDrivesUsSection/>
    <Advantages/>
    <YusufProfile/>
    <InticedeTeam/>
    
    {/* Other sections can be added here */}
    </div>
    );
}  
