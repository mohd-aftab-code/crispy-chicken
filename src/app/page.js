// src/app/page.js
import BigLukChicken from './components/BigLukChicken';
import BoxTendersMeal from './components/BoxTendersMeal';
import ChickenPotPie from './components/ChickenPotPie';
import ClassicChickenSandwich from './components/ClassicChickenSandwich';
import Footer from './components/Footer';
import FooterLocations from './components/FooterLocation';
import MilkShakes from './components/MilkShakes';
import PackagesSection from './components/pakegessection';
import PopcornChickenCombo from './components/PopcornChickenCombo';
import SpecialsSlider from './components/special';
import SpicySouthwestChickenSalad from './components/SpicySouthwestChickenSalad';

export default function Home() {
    return (
      <>
     
     <BigLukChicken/>
     <PackagesSection/>
     <SpecialsSlider/>
     <ClassicChickenSandwich/>
     <PopcornChickenCombo/>
     <ChickenPotPie/>
     <SpicySouthwestChickenSalad/>
     <MilkShakes/>
     <BoxTendersMeal/>
     <FooterLocations/>
     <Footer/>
   
      </>
    );
}
