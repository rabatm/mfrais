angular.module("mFrais", [])
.controller("mFraisCtrl", function($scope){
	
	$scope.frais = [
		{ value: "CLIENT", label: 'Frais client', transactions: [
			{ id: 1, type: "ndf", date: "20/03/2014", description: "dec 2014", justificatif: "tex.jgp", montant:228.90},
			{ id: 2, type: "rmb", date: "20/03/2014", description: "Virment", justificatif: "n 222", montant:228.90},
			{ id: 3, type: "ndf", date: "20/03/2014", description: "dec 2014", justificatif: "tex.jgp", montant:228.90},
			{ id: 2, type: "rmb", date: "20/03/2014", description: "Virment", justificatif: "n 222", montant:228.90},
			]
		},
		{ value: "PRO", label: 'Frais Pro', transactions: [
			{ id: 1, type: "ndf",date: "08/01/2016", description: "Frais Janvier 2016", justificatif: "tex.jgp", montant: 600.90},
			{ id: 2, type: "rmb",date: "22/01/2016", description: "Virement", justificatif: "tex.jgp", montant: 600.90},
			{ id: 3, type: "ndf",date: "05/02/2016", description: "Frais Février 2016", justificatif: "tex.jgp", montant:610.90}
			]
		}

	];
	$scope.countTotalEnt = function (ent) {
		$total = 0;
		ent.forEach(function(item) {
				if (item.type == "ndf")
					{$total += item.montant }
				else
					{$total -= item.montant }		
				})
		$scope.ClientR=100;
		$scope.ProR=$total;
		return $total;
	}
});
