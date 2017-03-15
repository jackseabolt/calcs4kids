class PagesController < ApplicationController
  helper_method :define_contact_form

  def main
  end

  private 

  	def define_contact_form
  		ContactForm.new
  	end

end
