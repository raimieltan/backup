class ExtendableWall {
  
    private long[] pows;

    public ExtendableWall(){
      pows = new long[64];
      long p = 1;
      for(int i = 63; i >= 0; i--){
        pows[i] = p;
        p *= 2;
      }
    }

    public String convertToWall(long number) {
      return String.format("%64s", Long.toBinaryString(number)).replace(' ', '0');
        /*char[] wall = new char[64];
        for(int j = 0; j < 64; j++){
          wall[j] = '0';
        }
        int i = 63;
        while(number > 0){
          long q = number / 2;
          long r = number % 2;
          wall[i] = (char)(((int) r) + 48) ;
          i--;
          number = q;
        }
        return new String(wall);*/
    }
    
    public long convertToNumber(String wall) {
        int n = wall.length();
        long num = 0;
        for(int i = 0; i < n; i++){
          if(wall.charAt(i) == '1') num += pows[i];
        }
        return num;
    }
    
    public long generateFixedWall(long numberRepresentation, int repairKits, int[] attackedPlaces) {
      String sw = convertToWall(numberRepresentation);
      char [] wall = sw.toCharArray();
      int n = sw.length();
      int m = attackedPlaces.length;
      for(int i = 0; i < m; i++){
        wall[attackedPlaces[i]] = '0';
      }
      
      int i = 63;
      while(i >= 0 && repairKits > 1){
        int c = 0;
        while(i >= 0 && wall[i] == '0'){
          i--;
          c++;
        }
        if(c > 1 && repairKits > 1){
          if(c >= repairKits){
            c = repairKits;
            repairKits = 0;
          } 
          else{
            repairKits -= c;
          }
          
          if(c < 2){
            i--;
            continue;
          }
          for(int j = i + c + 1; c > 0; j--, c--){
            wall[j] = '1';
          }
        }
        i--;
      }
      //1011001110110110111011010 //expected
      //1011001110110111101011010 //23555930
      //1011001110110110111011010 //23555546
      sw = new String(wall);
      return convertToNumber(sw);
    }

}

6564654866096054L
1100353246L
1040185210L
3380598779