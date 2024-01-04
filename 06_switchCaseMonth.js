function monthOfYear(dayMon) {
  switch (dayMon) {
    case 1:
      console.log(`Month  ${dayMon}==>January`);

      break;
    case 2:
      console.log(`Month  ${dayMon}==>February`);
      break;
    case 3:
      console.log(`Month  ${dayMon}==>March`);
      break;
    case 4:
      console.log(`Month ${dayMon}==>April`);
      break
    case 5:
      console.log(`Month  ${dayMon}==>May`);
      break
    case 6:
      console.log(`Month  ${dayMon}==>June`);
    
      break;
    case 7:
      console.log(` ${dayMon}==>Jule`);
      break;
    case 8:
      console.log(` ${dayMon}==>August`);
      break;
    case 9:
      console.log(` ${dayMon}==>September`);
      break;

    case 10:
      console.log(` ${dayMon}==>Octomber`);
      break;

    case 11:
      console.log(`Month ${dayMon}==>November`);
      break;

    case 12:
      console.log(`Month ${dayMon}==>December`);
      break;

      default:
        console.log(` Invalid Input --> Month Of year ${dayMon}`);
        break;
  }
}

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

