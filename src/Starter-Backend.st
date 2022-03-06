Smalltalk createPackage: 'Starter-Backend'!
Object subclass: #StarterBackend
	slots: {}
	package: 'Starter-Backend'!

!StarterBackend methodsFor: 'lambda api'!

echoEvent: event andContext: context
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#event -> event. #context -> context})
	}
!

status
	^ #{
		#statusCode -> 200.
		#headers->#{'Access-Control-Allow-Origin' -> '*'}.
		#body -> (JSON stringify: #{#ok -> true. #amber -> Smalltalk version. #node -> process version})
	}
! !

