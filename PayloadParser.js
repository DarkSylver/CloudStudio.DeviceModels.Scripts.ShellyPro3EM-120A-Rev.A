function parseUplink(device, payload)
{
	// Payload is Json
	env.log(payload.topic)
    var Payload = payload.asJsonObject();
    env.log(Payload)

    if (Payload.a_voltage != null) {
    var va = device.endpoints.byAddress("1");
    if (va != null)
    va.updateVoltageSensorStatus(Payload.a_voltage);
    }

    if (Payload.a_current != null) {
    var c1 = device.endpoints.byAddress("2");
    if (c1 != null)
    c1.updateCurrentSensorStatus(Payload.a_current);
    }

    if (Payload.a_pf != null) {
    var phi1 = device.endpoints.byAddress("3");
    if (phi1 != null)
    phi1.updateCosPhiSensorStatus(Payload.a_pf);
    }

    if (Payload.a_act_power != null) {
    var ap1 = device.endpoints.byAddress("7");
    if (ap1 != null)
    ap1.updateActivePowerSensorStatus(Payload.a_act_power);
    }

    if (Payload.a_aprt_power != null) {
    var app1 = device.endpoints.byAddress("6");
    if (app1 != null)
    app1.updateApparentPowerSensorStatus(Payload.a_aprt_power);
    }

    if (Payload.b_voltage != null) {
    var va = device.endpoints.byAddress("8");
    if (va != null)
    va.updateVoltageSensorStatus(Payload.b_voltage);
    }

    if (Payload.b_current != null) {
    var c1 = device.endpoints.byAddress("9");
    if (c1 != null)
    c1.updateCurrentSensorStatus(Payload.b_current);
    }

    if (Payload.b_pf != null) {
    var phi1 = device.endpoints.byAddress("10");
    if (phi1 != null)
    phi1.updateCosPhiSensorStatus(Payload.b_pf);
    }

    if (Payload.b_act_power != null) {
    var ap1 = device.endpoints.byAddress("14");
    if (ap1 != null)
    ap1.updateActivePowerSensorStatus(Payload.b_act_power);
    }

    if (Payload.b_aprt_power != null) {
    var app1 = device.endpoints.byAddress("13");
    if (app1 != null)
    app1.updateApparentPowerSensorStatus(Payload.b_aprt_power);
    }

    if (Payload.c_voltage != null) {
    var va = device.endpoints.byAddress("15");
    if (va != null)
    va.updateVoltageSensorStatus(Payload.c_voltage);
    }

    if (Payload.c_current != null) {
    var c1 = device.endpoints.byAddress("16");
    if (c1 != null)
    c1.updateCurrentSensorStatus(Payload.c_current);
    }

    if (Payload.c_pf != null) {
    var phi1 = device.endpoints.byAddress("17");
    if (phi1 != null)
    phi1.updateCosPhiSensorStatus(Payload.c_pf);
    }

    if (Payload.c_act_power != null) {
    var ap1 = device.endpoints.byAddress("21");
    if (ap1 != null)
    ap1.updateActivePowerSensorStatus(Payload.c_act_power);
    }

    if (Payload.c_aprt_power != null) {
    var app1 = device.endpoints.byAddress("20");
    if (app1 != null)
    app1.updateApparentPowerSensorStatus(Payload.c_aprt_power);
    }

    /*if (Payload.total_act_power != null) {
    var apt = device.endpoints.byAddress("22");
    if (apt != null)
    apt.updateActivePowerSensorStatus(Payload.total_act_power);
    }

    if (Payload.total_aprt_power != null) {
    var appt = device.endpoints.byAddress("23");
    if (appt != null)
    appt.updateApparentPowerSensorStatus(Payload.total_aprt_power);
    }

    if (Payload.total_current != null) {
    var ct = device.endpoints.byAddress("24");
    if (ct != null)
    ct.updateCurrentSensorStatus(Payload.total_current);
    }/*

/*        // Store Current 2
        if (decoded.currentma2 != null) {
            var c2 = device.endpoints.byAddress("2");

            if (c2 != null)
                c2.UpdateCurrentSensorStatus(decoded.currentma2);

            // Store Current 3
            if (decoded.currentma3 != null) {
                var c3 = device.endpoints.byAddress("3");

                if (c3 != null)
                    c3.UpdateCurrentSensorStatus(decoded.currentma3);
*/

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}