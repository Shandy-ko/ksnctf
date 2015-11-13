alpha = Array.new
5.times do
  ('a'..'z').each do|ch|
  alpha.push(ch)
end
end

str = gets.chomp

h = 1
while h < 26
  str.chars do |ch|
    if ch =~ /\s|\.|\,/
      print ch
    elsif ch =~ /[A-Z]/
      i = 0
      i = alpha.index(ch.downcase) + h
      print alpha[i].upcase
    else
      i = 0
      i = alpha.index(ch) + h
      print alpha[i]
    end

  end
  print "\n#{h}文字ずらし\n"
  h += 1
end
