require 'uri'
require 'net/http'
require 'erb'

uri = URI "http://ctfq.sweetduet.info:10080/~q31/kangacha.php"
ship = '1'
signature = '24b7447578c89ea8f5f8854d60e253f23bb5b8856d8a135c19af423db354ac60a1a4c932cecd800a0550211e8cc6e28e73e1ac93e7b9c786adc24702e48701c5'

(15..25).each do |i|
	response = Net::HTTP.new(uri.host, uri.port).get(uri.path, 'Cookie' => proc {
		s = `hashpump -s #{signature} -d "#{ship}" -a ',10' -k #{i}`.split("\n")
		"signature=#{s[0]}; ship=#{ERB::Util.url_encode(eval(%Q{"#{s[1]}"}))}"
	}.call).body
	puts "Length: #{i}"
	if (m = response.match(/FLAG_\w++/))
		puts "Result: success"
		puts "Flag: #{m}"
		puts ""
		break
	else
		puts "Result: Fail"
		puts ""
	end
end
