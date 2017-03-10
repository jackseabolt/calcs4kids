Rails.application.routes.draw do
	root 'pages#main'

	PagesController.action_methods.each do |action|
   		get "/#{action}", to: "pages##{action}", as: "#{action}_page"
	end

end
