<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ServiceEmployeeEntityRepository")
 */
class ServiceEmployeeEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ServicesEntity", inversedBy="employeeService")
     * @ORM\JoinColumn(nullable=false)
     */
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\EmployeeEntity", inversedBy="employeeServices")
     * @ORM\JoinColumn(nullable=false)
     */
    private $employee;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getService(): ?ServicesEntity
    {
        return $this->service;
    }

    public function setService(?ServicesEntity $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getEmployee(): ?EmployeeEntity
    {
        return $this->employee;
    }

    public function setEmployee(?EmployeeEntity $employee): self
    {
        $this->employee = $employee;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }
}
