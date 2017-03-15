class ContactMailer < ApplicationMailer
	def new_request(contact_mailer)
		@contact_mailer = contact_mailer
		mail(to: 'jackseabolt@gmail.com', subject: 'Contact Submission from Calcs4Kids')
	end	
end
