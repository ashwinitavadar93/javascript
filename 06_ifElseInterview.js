


var tcsInterviewEligibility = function(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore >=90 ||candidateName=="name") {
        console.log(`Congratulation ${candidateName} is eligible for TCS interview.`);
    } else {
        console.log(`Sorry Unfortunatly ! ${candidateName} you are not eligible for TCS interview.`);
    }
};
tcsInterviewEligibility(80,86,90,"Ashwini");
tcsInterviewEligibility(70,65,55,"Adhik");
tcsInterviewEligibility(60,79,88,"Monika");
