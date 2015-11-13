require 'base64'
str = gets.chomp

i=0

while i<30
str =  Base64.decode64(str)
puts str,i+1
i += 1
end
