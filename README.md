#####1#####
```perl
1 $flag=0;
2 while($line=<>){
3   chomp($line);
4   if($line=~/<NUM>/){
5     ($num=$line)=~s/<NUM>|<\/NUM>//g;
6   }elsif($line=~/<TEXT>/){
7     $flag+=1;
8   }elsif($line=~/<\/TEXT>/){
9     $flag-=1;
10   }
11
12   if($flag==1){
13     my @words=split(/\s/g,$line);
14     foreach my$word (@words){
15       if($word!~/<TEXT>/){
16         $word=~tr/A-Z/a-z/;
17         $word=~s/\.|,|'|"//g;
18         print "$num $word\n";
19       }
20     }
21   }
22 }
```
