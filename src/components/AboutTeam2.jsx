import React, { useState } from 'react';
import "../css/aboutStyles.css";

var info1 = "Mirley was born and raised in San Jose, Costa Rica. She arrived in Santa Barbara, California as an exchange student under the auspices of Rotary Club International. As a student in Costa Rica she had been involved with Rotary for over 8 years.She earned two MBAs - one degree in Strategic Leadership from Pamplona, Spain and another in Marketing from San Jose, Costa Rica along with her two BA degrees - one in Marketing/Advertising and another one in International Business. \
In addition, she earned certificates in Paralegal Studies and in Mediation and Conflict Resolution from University of California at Santa Barbara (UCSB). Her commitment and love for learning has led to college’s degrees on several continents with different cultures and languages which allowed her to be fully bilingual. Her studies and work experience include such areas as Media, Marketing, Public Relations, Public Speaking, Teaching and the Law. Her multi-cultural experience has allowed her to relate with people from all walks of life and ages and she has learned to be adaptable and open to new ideas, people, and cultures. At an early age, Mirley exhibited her passion to help others. She has been involved in organizations like Rotary Club International, United Nations of America, Church Feed the Homeless Program and the Rape Treatment Center, which serves the needs of sexually abused children and their families. Her passion to mentor and inspire others, and Mirley’s own personal and tragic experience motivated her to create a non-profit that would help others who have suffered as she had as a child and young adult."

var info2 =   "Berk began his career as an NBC news producer based in Washington, D.C., where he covered current events, politics and medical stories, including two presidential campaigns and such medical milestones as the first successful artificial heart. As West Coast producer of NBC’s top-rated Today Show, Berk covered everything from the Academy Awards, the first space shuttle landing, and the emergence of Napa Valley as one of the world's premiere wine growing regions. Later, the producers of Entertainment Tonight recruited him to bring news credibility to its coverage of the Hollywood scene. In his 13 years with Entertainment Tonight, he received eight national Emmy nominations for his work. Berk returned to NBC to help create and launch its syndicated entertainment news show, Access Hollywood, and the show consistently out-rated Entertainment Tonight in the top 10 TV markets during his tenure. After leaving Access Hollywood in 2000, Barry produced the pilot for NBC’s Daytime show “Starting Over”, was Senior Producer for Lifetime Television’s “Speaking of Women’s Health,” a half-hour weekly magazine show dealing with women’s health issues, and produced several public service videos. In 2001 Berk co-created the Event Production Company, BBDRPACIFIC. The company produces charity gala’s and business conferences in Southern California and Washington D.C."

var info3 = "Susan Berk first moved to California from her native Boston in 1979 a few years after graduating summa cum laude from the University of New Hampshire with a BA in Art. Her first job in Los Angeles was with City National Bank.Susan went back to school at UCLA and graduated with honors from the paralegal program. She immediately went to work as a tax paralegal with Hochman, Salkin, and DeRoy from 1982 to 2005. Susan got active in local politics and gained experience starting in 1995 by organizing local grass roots support for a public park project in Los Angeles and obtaining approval by Steve Soboroff, then president of the Los Angeles Department of Recreations and Parks Commission. Since 2005, Susan started Community Resource Partners and has been active in managing local elections for candidates, initiatives and referendums along with community relations management for businesses,  non-profit organizations and real property development projects. Susan has the skills necessary to sway public opinion and rally support behind a cause along with event planning for corporate and non-profit organizations.Other achievements include former Trustee of the Echo Foundation for hearing impaired children in Culver City, former member of the Board of Directors of the League of Women Voters, former President and current member of the Board of Directors of the Rotary Club of Beverly Hills, former member of the Board of Directors of the Beverly Hills Education Foundation, former member of the Board of Directors of the Beverly Hills Chamber of Commerce and current member of The Hope Street Family Center Development Committee."

var info4 = "Trial attorney in federal and state court. Federal trial lawyer in a range of cases including: death penalty, investment fraud, credit card fraud, identify theft, counterfeiting, internet crimes, alien smuggling, passport and social security fraud, immigration, international extradition agreements, bank robbery, drugs, and guns. Negotiate pre-indictment and post-indictment pleas. Recent trials: complex wire fraud and tax evasion, sale of pseudoephedrine, and murder in a federal prison. Guest lecturer at Loyola Law School. Trial attorney in federal court in range of cases including: investment fraud, credit card fraud, identify theft, counterfeiting, internet crimes, alien smuggling, passport and social security fraud, immigration, international extradition agreements, bank robbery, drugs, and guns. Lead trial attorney on fraud, identity theft, murder, and Postal Services Crimes. Negotiated pre-indictment and post-indictment pleas. Prepare, develop, and cross-examine government expert in investment fraud case. Draft and argue pretrial motions, motions in limine, and sentencing position papers. Managed Felony trial calendar. Lead counsel on felony cases ranging from assault and weapons offenses, to distribution of drugs while armed. Served as co-counsel on murder and first-degree sexual abuse cases. Maintained responsibility for all aspects of litigation, including directing an investigative team, managing discovery, authoring motions, and conducting trial. Negotiated plea agreements with Assistant United States Attorney. Trained and supervised investigators and law students."


const peopleData = [
  {
    id: 1,
    name: 'Mirley Vargas',
    jobTitle: 'FOUNDER/ EXECUTIVE DIRECTOR',
    info: info1,
    imageUrl: '/images/AboutUs/MirleyVargas.png'
  },
  {
    id: 2,
    name: 'Barry Berk',
    jobTitle: 'TREASURER - BOARD OF DIRECTORS',
    info: info2,
    imageUrl: '/images/AboutUs/BarryBerk.jpg'
  },
  {
    id: 3,
    name: 'Susan Berk',
    jobTitle: 'SECRETARY - BOARD OF DIRECTORS',
    info: info3,
    imageUrl: '/images/AboutUs/SusanBerk.jpg'
  },
  {
    id: 4,
    name: 'Matthew J. Lombard',
    jobTitle: 'ADVISORY COUNCIL - LEGAL',
    info: info4,
    imageUrl: '/images/AboutUs/MatthewLombard.jpg'
  }
];

function AboutHTML() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container">
          <div className="content-box">
            <p className="text-blk section-head">
                {selectedPerson ? selectedPerson.name : 'Our Team'}
            
            </p>
            <p className="text-blk section-body">
              {selectedPerson ? selectedPerson.info : 'Misión de OOTS'}
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container">
          <div className="responsive-container-block team-cards-inner-container">
            {peopleData.map((person) => (
              <div
                key={person.id}
                className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container"
                onClick={() => handleCardClick(person)}
              >
                <div className="card">
                  <div className="img-box">
                    <img className="person-img" src={person.imageUrl} alt={`Person ${person.id}`} />
                  </div>
                  <div className="card-content-box">
                    <p className="text-blk person-name">
                      {person.name}
                    </p>
                    <p className="text-blk person-info">
                      {person.jobTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHTML;